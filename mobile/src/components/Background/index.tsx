import { ImageBackground } from 'react-native'

import { styles } from './styles'

import backGroundImg from '../../assets/background-galaxy.png'

interface Props {
  children: React.ReactNode
}
export function Background({ children }: Props) {
  return (
    <ImageBackground source={backGroundImg} style={styles.container} defaultSource={backGroundImg}>
      {children}
    </ImageBackground>
  )
}
