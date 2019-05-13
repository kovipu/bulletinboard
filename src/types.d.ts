interface State {
  cards: {
    id: string,
    x: number,
    y: number,
    content: string
  }[]
}

type Action = ServerEvent

interface ServerEvent {
  type: 'ping',
  payload: {}
}

interface ClientEvent {
  type: 'pong'
}
