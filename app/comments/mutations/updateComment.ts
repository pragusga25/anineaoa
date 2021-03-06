import { resolver } from "blitz"
import db from "db"
import { z } from "zod"

const UpdateComment = z.object({
  id: z.number(),
  content: z.string().min(1).max(300),
})

export default resolver.pipe(
  resolver.zod(UpdateComment),
  resolver.authorize(),
  async ({ id, ...data }) => {
    // TODO: in multi-tenant app, you must add validation to ensure correct tenant
    const comment = await db.comment.update({ where: { id }, data })

    return comment
  }
)
