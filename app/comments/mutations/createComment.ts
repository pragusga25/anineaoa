import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const CreateComment = z.object({
  content: z.string().min(1).max(300),
  postId: z.number().min(1),
  userId: z.number().min(1),
})

export default resolver.pipe(resolver.zod(CreateComment), resolver.authorize(), async (input) => {
  // TODO: in multi-tenant app, you must add validation to ensure correct tenant
  const comment = await db.comment.create({ data: input })

  return comment
})
