import {
    integer,
    json,
    pgTable,
    primaryKey,
    text,
    timestamp,
    unique,
    uniqueIndex,
    uuid,
} from "drizzle-orm/pg-core"

export const profiles = pgTable(
    "profiles",
    {
        id: uuid("id").primaryKey().notNull(),
        updatedAt: timestamp("updated_at", {
            withTimezone: true,
            mode: "string",
        }),
        username: text("username"),
        fullName: text("full_name"),
        avatarUrl: text("avatar_url"),
        website: text("website"),
    },
    (table) => {
        return {
            profilesUsernameKey: unique("profiles_username_key").on(
                table.username
            ),
        }
    }
)

export const properties = pgTable("properties", {
    id: uuid("id").primaryKey().notNull(),
    userId: text("userId").notNull(),
    price: integer("price").notNull(),
    city: text("city").notNull(),
    address: text("address").default(""),
    size: integer("size").notNull(),
    bhk: integer("bhk").default(2),
    seller: text("seller").notNull(),
    description: text("description"),
    image: text("image").notNull(),
})
