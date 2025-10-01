import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import { useState } from 'react';
import AdicionarReceitas from '../componentes/AdicionarReceitas';

export default function Receitas({navegar}) {
    const [view, setView] = useState('lista');
    const [receitas, setReceitas] = useState([]);

    return (
        <View>
            <ScrollView>
                <View>
                    <TouchableOpacity onPress={() => navegar('Home')}>
                        <Image  source={require('../assets/arrow-bg.png')}/>
                    </TouchableOpacity>
                    <Text>Receitas</Text>
                </View>

                

                {(view === 'lista') ? (
                    <View>
                        <TouchableOpacity onPress={() => setView('formulario')}>
                            <Text>Adicionar Receita</Text>
                        </TouchableOpacity>
                        
                    {(receitas.length === 0) ? (
                        <Text>Você não tem receitas cadastradas</Text>
                    ) : (
                        <View></View>
                    )}

                    </View>
                ) : (
                    <View>
                        <AdicionarReceitas/>
                    </View>
                )}

            </ScrollView>
        </View>
    )
}
