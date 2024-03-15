import { pgTable, unique, pgEnum, uuid, timestamp, text } from "drizzle-orm/pg-core"

import { sql } from "drizzle-orm"
export const keyStatus = pgEnum("key_status", ['default', 'valid', 'invalid', 'expired'])
export const keyType = pgEnum("key_type", ['aead-ietf', 'aead-det', 'hmacsha512', 'hmacsha256', 'auth', 'shorthash', 'generichash', 'kdf', 'secretbox', 'secretstream', 'stream_xchacha20'])
export const factorType = pgEnum("factor_type", ['totp', 'webauthn'])
export const factorStatus = pgEnum("factor_status", ['unverified', 'verified'])
export const aalLevel = pgEnum("aal_level", ['aal1', 'aal2', 'aal3'])
export const codeChallengeMethod = pgEnum("code_challenge_method", ['s256', 'plain'])


export const profiles = pgTable("profiles", {
	id: uuid("id").primaryKey().notNull(),
	updatedAt: timestamp("updated_at", { withTimezone: true, mode: 'string' }),
	username: text("username"),
	fullName: text("full_name"),
	avatarUrl: text("avatar_url"),
	website: text("website"),
},
(table) => {
	return {
		profilesUsernameKey: unique("profiles_username_key").on(table.username),
	}
});