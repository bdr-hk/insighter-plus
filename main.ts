Deno.serve(async (req: Request) => {
  const url = new URL(req.url);
  const path = url.pathname === "/" ? "/index.html" : url.pathname;
  try {
    const data = await Deno.readFile(`.${path}`);
    const contentType = path.endsWith(".html") ? "text/html; charset=utf-8" : "application/octet-stream";
    return new Response(data, { headers: { "content-type": contentType } });
  } catch {
    return new Response("Not found", { status: 404 });
  }
});
