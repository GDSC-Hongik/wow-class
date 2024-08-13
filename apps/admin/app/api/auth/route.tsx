export const dynamic = "force-static";

export async function GET() {
  const res = await fetch(
    "https://dev-api.gdschongik.com/onboarding/members/me/dashboard",
    {
      credentials: "same-origin",
    }
  );
  const data = await res.json();

  return Response.json({ data });
}
