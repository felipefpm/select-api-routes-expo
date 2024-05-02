import { ExpoRequest, ExpoResponse } from "expo-router/server"

export async function POST(request: ExpoRequest): Promise<ExpoResponse>{
  const { email, password } = await request.json()

  if (email === 'felipe@teste.com') {
    
    return ExpoResponse.json({
      email,
      name: "Felipe Pinto"
    })
  }

  return new ExpoResponse('Usuario não encontrado!', {
    status: 404
  })

}

export async function GET(): Promise<ExpoResponse>{
  return ExpoResponse.json({
    message: "API Brack dentro do Mobile"
  })
}