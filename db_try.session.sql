CREATE TABLE "things"(
  "id" serial PRIMARY KEY,
  "body" text  NOT NULL CHECK ("body"!=''),
  "updatedAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "createdAt" TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- INSERT INTO "things"("body") VALUES('some spesial text');
-- UPDATE "things" SET  "body" = 'new test', "updateAt" = CURRENT_TIMESTAMP WHERE "id" = 12
-- DELETE FROM "things" WHERE "id" = 2