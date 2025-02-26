import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const CreateNewUser = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    pictureURL: v.string(),
  },
  handler: async (ctx, args) => {
    if (!args.email || !args.name || !args.pictureURL) {
      throw new Error("Missing required user details");
    }

    const users = await ctx.db
      .query("users")
      .filter((q) => q.eq(q.field("email"), args.email))
      .collect();

    if (!users || users.length === 0) {
      return await ctx.db.insert("users", {
        name: args.name,
        email: args.email,
        pictureURL: args.pictureURL,
        credits: 3,
      });
    }

    return users[0];
  },
});
