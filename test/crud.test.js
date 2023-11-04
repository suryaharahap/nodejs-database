import { prismaClient } from '../src/prisma-client';

describe('Prisma Client', () => {
  it('should be able to create customer', async () => {
    const customer = await prismaClient.customer.create({
      data: {
        id: 'suryakeren',
        email: 'suryaharahap@gmail.com',
        name: 'Surya Harahap',
        phone: '083123112342',
      },
    });

    expect(customer.id).toBe('suryakeren');
    expect(customer.email).toBe('suryaharahap@gmail.com');
    expect(customer.name).toBe('Surya Harahap');
    expect(customer.phone).toBe('083123112342');
  });

  it('should be able to update customer', async () => {
    const customer = await prismaClient.customer.update({
      data: {
        name: 'Surya Harahap World',
      },
      where: {
        id: 'suryakeren',
      },
    });

    expect(customer.id).toBe('suryakeren');
    expect(customer.email).toBe('suryaharahap@gmail.com');
    expect(customer.name).toBe('Surya Harahap World');
    expect(customer.phone).toBe('083123112342');
  });

  it('should be able to read customer', async () => {
    const customer = await prismaClient.customer.findUnique({
      where: {
        id: 'suryakeren',
      },
    });

    expect(customer.id).toBe('suryakeren');
    expect(customer.email).toBe('suryaharahap@gmail.com');
    expect(customer.name).toBe('Surya Harahap World');
    expect(customer.phone).toBe('083123112342');
  });
});
