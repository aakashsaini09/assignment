import { Client } from 'pg';

export async function getClient() {
    const client = new Client("postgresql://first_owner:3PQDV6umNjst@ep-late-snow-a5o89d38.us-east-2.aws.neon.tech/first?sslmode=require");
    await client.connect();
    return client;
}