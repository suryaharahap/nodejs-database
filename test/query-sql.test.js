const { prismaClient } = require('../src/prisma-client');

describe('Prisma Client', () => {
  it('should be able to query sql', async () => {
    const id = '1';

    const sample =
      await prismaClient.$queryRaw`SELECT * FROM sample WHERE id = ${id}`;

    for (const sample of sample) {
      console.info(`Result sample id: ${sample.id} and name ${sample.name}`);
    }
  });
});
