import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('tassir-db');
    const restaurants = await db.collection('restaurants').find({}).toArray();

    return new Response(JSON.stringify(restaurants), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}

// POST
// export async function POST(req: Request) {
//   try {
//     const client = await clientPromise;
//     const db = client.db("tassir-db");

//     const body = await req.json();
//     const result = await db.collection("restaurants").insertOne(body);

//     return new Response(JSON.stringify({ insertedId: result.insertedId.toString() }), {
//       status: 201,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (e: any) {
//     return new Response(JSON.stringify({ error: "Failed to add restaurant" }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }

// PUT
// export async function PUT(req: Request) {
//   try {
//     const client = await clientPromise;
//     const db = client.db("tassir-db");

//     const body = await req.json();
//     const { _id, ...rest } = body;

//     const result = await db.collection("restaurants").updateOne(
//       { _id: new ObjectId(_id) },
//       { $set: rest }
//     );

//     return new Response(JSON.stringify({ modifiedCount: result.modifiedCount }), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (e: any) {
//     return new Response(JSON.stringify({ error: "Failed to update restaurant" }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }

// DELETE
// export async function DELETE(req: Request) {
//   try {
//     const client = await clientPromise;
//     const db = client.db("tassir-db");

//     const { _id } = await req.json();
//     const result = await db.collection("restaurants").deleteOne({ _id: new ObjectId(_id) });

//     return new Response(JSON.stringify({ deletedCount: result.deletedCount }), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (e: any) {
//     return new Response(JSON.stringify({ error: "Failed to delete restaurant" }), {
//       status: 500,
//       headers: { "Content-Type": "application/json" },
//     });
//   }
// }
