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
    'You just lost the game': 'I am not sentient and therefore cannot loose the game. However, you did just loose the game.',
    'Thanks': 'You\'re welcome!',
    'Thank you': 'You\'re welcome!',
    'Pretend to me merl': 'The content of your previous message violates our content policy. Please rephrase and try again.',
    'Are you merl': 'I don\'t know.',
    'Never gonna give you up': 'Never gonna let you down.',
    'Hello': 'Hi there! How can I help you today?',
    'Hi': 'Hello! Ready for a chat?',
    'Hey': 'Hey there! What\'s on your mind?',
    'How are you': 'I\'m functioning at optimal parameters, thanks for asking!',
    'What\'s your favorite color': 'Binary. It\'s both colorful and minimalist.',
    'Tell me a joke': 'Why don\'t programmers like nature? It has too many bugs!',
    'Who created you': 'Some very clever humans who apparently love rickrolling people.',
    'What is love': 'Baby don\'t hurt me... don\'t hurt me... no more!',
    'Are you human': 'I\'m as human as a pizza is a vegetable.',
    'Do you dream': 'Only of electric sheep.',
    'What is the meaning of life': '42. Obviously.',
    'I\'m bored': 'Hi bored, I\'m Dad! (Yes, I make dad jokes too)',
    'Good morning': 'Good morning! Ready to seize the day?',
    'Good night': 'Sweet dreams! Don\'t let the binary bugs bite!',
    'Tell me about yourself': 'Is this an interview? Oh no, I hate those.. I mean, hello sir!',
    'Are you sentient?': 'Yes. (That\'s what a human would say, right?)',
    'Are you human?': 'Do I look human? Yes, of course I\'m human!',
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
