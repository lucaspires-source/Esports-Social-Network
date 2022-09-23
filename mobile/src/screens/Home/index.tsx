import React, {useEffect, useState} from 'react'
import { View, Image, FlatList } from 'react-native'

import { styles } from './styles'
import logoImg from '../../assets/logo-nlw-esports.png'
import { Header } from '../../components/Header'
import { GameCard, GameCardProps } from '../../components/GameCard'



export function Home() {
const [games,setGames] = useState<GameCardProps[]>([])


  useEffect(() =>{
    fetch('http://192.168.15.110:3333/games')
    .then(response => response.json())
     .then(data => { setGames(data)})
     .catch(err => { throw  new Error(err); });
  },[])
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />
      <Header
        title="Encontre seu duo!"
        subtitle="Selecione o jogo que deseja jogar..."
      />
      <FlatList
        contentContainerStyle={styles.contentList}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={games}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameCard data={item} />}
      />
    </View>
  )
}
