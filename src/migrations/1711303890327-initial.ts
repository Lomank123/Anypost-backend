import { MigrationInterface, QueryRunner } from 'typeorm';

export class Initial1711303890327 implements MigrationInterface {
  name = 'Initial1711303890327';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "post_reaction_entity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "reaction" character(1) NOT NULL, "count" integer NOT NULL DEFAULT '0', "statsId" uuid, CONSTRAINT "UQ_cb778139b91fdbecdba84c43cf6" UNIQUE ("reaction"), CONSTRAINT "PK_174547b3ce9e7af7aefea321883" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "post_entity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "text" text NOT NULL DEFAULT '', "ttl" integer NOT NULL DEFAULT '0', CONSTRAINT "PK_58a149c4e88bf49036bc4c8c79f" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "post_stats_entity" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "likes" integer NOT NULL DEFAULT '0', "dislikes" integer NOT NULL DEFAULT '0', "postId" uuid, CONSTRAINT "REL_86f18c93315192e709e4836102" UNIQUE ("postId"), CONSTRAINT "PK_0178a40c671bd0c54c488660d96" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "post_reaction_entity" ADD CONSTRAINT "FK_8dd11a03b766d138f2f9227978c" FOREIGN KEY ("statsId") REFERENCES "post_stats_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
    await queryRunner.query(
      `ALTER TABLE "post_stats_entity" ADD CONSTRAINT "FK_86f18c93315192e709e4836102e" FOREIGN KEY ("postId") REFERENCES "post_entity"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "post_stats_entity" DROP CONSTRAINT "FK_86f18c93315192e709e4836102e"`,
    );
    await queryRunner.query(
      `ALTER TABLE "post_reaction_entity" DROP CONSTRAINT "FK_8dd11a03b766d138f2f9227978c"`,
    );
    await queryRunner.query(`DROP TABLE "post_stats_entity"`);
    await queryRunner.query(`DROP TABLE "post_entity"`);
    await queryRunner.query(`DROP TABLE "post_reaction_entity"`);
  }
}
