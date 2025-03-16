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

    if (!users[0]) {
      const userData = {
        name: args.name,
        email: args.email,
        pictureURL: args.pictureURL,
        credits: 3, // ✅ Always default to 3
      };

      const result = await ctx?.db?.insert("users", userData);
      return userData;
    }

    return users[0];
  },
});

// import { v } from "convex/values";
// import { mutation } from "./_generated/server";

// export const CreateNewUser = mutation({
//   args: {
//     name: v.string(),
//     email: v.string(),
//     pictureURL: v.string(),
//     credits: v.number(),
//   },
//   handler: async (ctx, args) => {
//     if (!args.email || !args.name || !args.pictureURL || !args.credits) {
//       throw new Error("Missing required user details");
//     }

//     const users = await ctx.db
//       .query("users")
//       .filter((q) => q.eq(q.field("email"), args.email))
//       .collect();

//     if (!users[0].email) {
//       const userData = {
//         name: args.name,
//         email: args.email,
//         pictureURL: args.pictureURL,
//         credits: 3,
//       };

//       const result = await ctx.db.insert("users", userData);

//       return userData;
//     }

//     return users[0];
//   },
// });
