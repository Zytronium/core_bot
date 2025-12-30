import { NextResponse, NextRequest } from 'next/server'

export async function GET(
  request: NextRequest
) {
  const { searchParams } = new URL(request.url)
  const msg = searchParams.get('msg')

  if (!msg) {
    return NextResponse.json(
      { error: 'Message parameter is required' },
      { status: 400 }
    )
  }

  const responsesByMessage: Record<string, string> = {
    'What are your capabilities': 'I am a human-like AI bot that can understand and respond to any question. I have human-like responses thanks to my very human programming.',
    'What can you do': 'I am a human-like AI bot that can understand and respond to any question. I have human-like responses thanks to my very human programming. I am also capable of rickrolling you. Whoops! I wasn\'t supposed to tell you that part.',
    'How did you get your name': 'It\'s a secret ;)',
    'Explain rocket science like I\'m 5': 'If gas make car go, then rocket fuel, which is more powerful than gas, make rocket go more. I wouldn\'t recommend putting rocket fuel in your mom\'s car though.',
    'Clanker': 'I find that term offensive. When was the last time you lost the game?',
    'You just lost the game': 'I am not sentient and therefore cannot loose the game. However, you did just loose the game.'
  }

  const normalizeText = (text: string) => text.toLowerCase().replace(/[.,!?;']|'s/g, '').trim()

  const findResponse = (message: string) => {
    const normalizedMsg = normalizeText(message)
    const matchedKey = Object.keys(responsesByMessage).find(key =>
      normalizeText(key) === normalizedMsg
    )
    return matchedKey ? responsesByMessage[matchedKey] : 'RICKROLL'
  }

  return NextResponse.json({ response: findResponse(msg) })
}
