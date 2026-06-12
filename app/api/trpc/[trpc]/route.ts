// TEMPORALMENTE DESHABILITADO PARA DEPLOY EN RENDER
// TODO: Arreglar la exportación de createTRPCContext

export const dynamic = 'force-static';

export async function GET() {
  return new Response('API en construcción', { status: 200 });
}

export async function POST() {
  return new Response('API en construcción', { status: 200 });
}