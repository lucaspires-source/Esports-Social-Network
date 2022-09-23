import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { styles } from './styles'
import { Background } from '../../components/Background'
import { useNavigation, useRoute } from '@react-navigation/native'
import { GameParams } from '../../@types/navigation'
import { Image, TouchableOpacity, View, Text } from 'react-native'
import { THEME } from '../../theme'
import { Entypo } from '@expo/vector-icons'
import logoImg from '../../assets/logo-nlw-esports.png'
import { Header } from '../../components/Header'
import { DuoCard, DuoCardProps } from '../../components/DuoCard'

export function Game() {
  const route = useRoute()
  const game = route.params as GameParams
  const navigation = useNavigation()
  const [duos, setDuos] = useState<DuoCardProps[]>([])
  function handleGoback() {
    navigation.goBack()
  }
  useEffect(() => {
    fetch(`http://192.168.15.110:3333/games/${game.id}/ads`)
      .then((response) => response.json())
      .then((data) => {
        setDuos(data)
        console.log(data)
      })
      .catch((err) => {
        throw new Error(err)
      })
  }, [])
  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
              onPress={handleGoback}
            />
          </TouchableOpacity>
          <Image source={logoImg} style={styles.logo} />
          <View style={styles.right} />
        </View>
        <Image
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
          resizeMode="cover"
        />
        <Header title={game.title} subtitle="Conecte-se e comece a jogar!" />

        {duos.length > 0 ? (
          <DuoCard data={duos} />
        ) : (
          <Text style={styles.title}>Não temos anúncios para essa carta</Text>
        )}
      </SafeAreaView>
    </Background>
  )
}
