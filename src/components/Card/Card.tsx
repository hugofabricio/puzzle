import * as React from 'react'
import { CardProps } from './Card.types'

import * as S from './Card.styles'

const Card = ({ children }: CardProps) => (
  <S.Wrapper data-testid="test-card">{children}</S.Wrapper>
)

export default Card
