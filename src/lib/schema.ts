import {
    integer,
    json,
    pgTable,
    primaryKey,
    text,
    timestamp,
    uniqueIndex,
} from "drizzle-orm/pg-core"

export const users = pgTable(
    "user",
    {
        id: text("id").notNull().primaryKey(),
        name: text("name"),
        type: text("type").default("buyer"),
        email: text("email").notNull(),
        emailVerified: timestamp("emailVerified", { mode: "date" }),
        createdAt: timestamp("created_at").notNull().defaultNow(),
        image: text("image"),
    },
    (users) => {
        return {
            uniqueIdx: uniqueIndex("unique_email").on(users.email),
        }
    }
)

export const properties = pgTable("properties", {
    userId: text("userId")
        .notNull()
        .references(() => users.id, { onDelete: "cascade" }),
    city: text("city").notNull(),
    bhk: integer("bhk").default(2),
    price: integer("price").notNull(),
    size: integer("size").notNull(),
    rating: integer("rating").default(4),
    address: text("address").default(""),
    image: text("image").notNull(),
    panorama: text("panorama").notNull(),
})
