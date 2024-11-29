import { db } from "@/server/db";
export const POST = async (request: Request) => {
  const { data } = await request.json();
  const firstName : string = data.first_name;
  const lastName = data.last_name;
  const imageUrl = data.image_url;
  const emailAddress = data.email_addresses[0].email_address;
  const id = data.id;

  await db.user.create({
    data : {
      id,
      firstName,
      lastName,
      imageUrl,
      emailAddress
    }
  });
  return new Response("Webhook user received", { status: 200 });
};
