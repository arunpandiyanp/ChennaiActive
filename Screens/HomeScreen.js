import React, { useState } from 'react';
import { Text, View , StyleSheet, ImageBackground ,TextInput,FlatList,Image,TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const DATA = [
  { 
    id: '1', 
    title: 'Motionless in White Concert',
    subtitle:"Motionless in White is an American metalcore band from Scranton, Pennsylvania. Formed in 2004",
    imageSrc:  require('../images/flatlistImages/motionless.jpg')
  },
  { 
    id: '2',
    title: 'LADY GAGA : MAYHEM LAUNCH PARTY',
    subtitle:"⚡️ MAYHEM RELEASE PARTY ⚡️" ,
    imageSrc:  require('../images/flatlistImages/ladygaga.jpg')
  },
  { 
    id: '3', 
    title: 'sabrina carpenter events',
    subtitle:"Sabrina Annlynn Carpenter is an American singer, songwriter, and actress." ,
    imageSrc:  require('../images/flatlistImages/SabrinaCarpenter.jpg')
  },
  { 
    id: '4', 
    title: 'Motionless in White Concert',
    subtitle:"Motionless in White is an American metalcore band from Scranton, Pennsylvania. Formed in 2004",
    imageSrc:  require('../images/flatlistImages/motionless.jpg')
  },
  { 
    id: '5',
    title: 'LADY GAGA : MAYHEM LAUNCH PARTY',
    subtitle:"⚡️ MAYHEM RELEASE PARTY ⚡️" ,
    imageSrc:  require('../images/flatlistImages/ladygaga.jpg')
  },
  { 
    id: '6', 
    title: 'sabrina carpenter events',
    subtitle:"Sabrina Annlynn Carpenter is an American singer, songwriter, and actress." ,
    imageSrc:  require('../images/flatlistImages/SabrinaCarpenter.jpg')
  },
  // Add more items as needed
];


const HomeScreen = ({navigation}) => {
  const [text, setText] = useState('');

  const Item = ({ title,subTitle,imageSource}) => (
    <TouchableOpacity
    style={homestyles.card}
    onPress={() => navigation.navigate('DetailScr')}
  >
    <View style={homestyles.item}>
        <Image
          source={imageSource}
          style={homestyles.image}
        />
  
      <Text style={homestyles.title} numberOfLines={1}>{title}</Text>
      <Text style={homestyles.subTitle} numberOfLines={1}>{subTitle}</Text>
  
    </View>
    </TouchableOpacity>
  
  );
  
  const renderItem = ({ item }) => <Item title={item.title} subTitle={item.subtitle} imageSource={item.imageSrc} />;

  return (
<ImageBackground 
style={homestyles.backgroundView}
>
   <SafeAreaView style={homestyles.content}>
    <View style={homestyles.topNavigationView}>

    <View style={{flexDirection:'row',width:'100%',height:60,backgroundColor:'clear',alignItems:'center',justifyContent:'space-between'}}>

      <View style={{backgroundColor:'clear',height:50,width:50,borderRadius:25,justifyContent:'flex-start'}}>
      <ImageBackground 
      source={require('../images/homeicons/menu.png')} 
      style={homestyles.backgroundImage}
    />
        </View>
  <Text style={{color:'white',alignSelf:'center',justifyContent:'center',fontSize:17}}>Chennai, Tamilnadu</Text>
  <View style={{backgroundColor:'clear',height:60,width:60,borderRadius:30}}>
  <ImageBackground 
      source={require('../images/homeicons/notifications.png')} 
      style={homestyles.backgroundImage}
    />
  </View>
</View>
<View style={{backgroundColor:"clear",height:60,width:"100%",flexDirection:'row'}}>
<View style={{left:10,width:"80%",top:10,height:40,backgroundColor:"white",borderRadius:10,justifyContent: 'center',
    alignItems: 'center'}}>
      <TextInput
        style={homestyles.input}
        placeholder="Enter text here"
        value={text}
        onChangeText={setText}
      />
</View>
<View style={{left:20,width:40,top:10,height:40,backgroundColor:"clear",borderRadius:20}}>
<ImageBackground 
      source={require('../images/homeicons/filter.png')} 
      style={homestyles.backgroundImage}
    />
</View>
</View>

</View>
<View style={homestyles.filters}>
        <TouchableOpacity style={homestyles.filterButton}>
          <Text style={homestyles.filterText}>Music</Text>
        </TouchableOpacity>
        <TouchableOpacity style={homestyles.filterButton}>
          <Text style={homestyles.filterText}>Festival</Text>
        </TouchableOpacity>
        <TouchableOpacity style={homestyles.filterButton}>
          <Text style={homestyles.filterText}>Sport</Text>
        </TouchableOpacity>
        <TouchableOpacity style={homestyles.filterButton}>
          <Text style={homestyles.filterText}>Other</Text>
        </TouchableOpacity>
      </View>

<FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />

    </SafeAreaView>
   </ImageBackground>
   
  );
};
const homestyles = StyleSheet.create({
  content:{
    flex:1
  },
  card: {
    flexDirection: 'row',
    backgroundColor: 'clear',
    borderRadius: 10,
    marginBottom: 10,
    overflow: 'hidden',
  },
  backgroundView: {
    flex: 1,
  backgroundColor:'#2C3E50',
    height:'100%',
    width:'100%',
  },
  topNavigationView: {
    height: 120,
    width:'100%',
    backgroundColor:'clear',
  },
  backgroundImage: {
    justifyContent: 'center',
    alignItems: 'center',
    height:"100%",
    width:"100%",
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    width: '80%',
    backgroundColor:'white'
  },
  item: {
    backgroundColor: '#B0B0B0',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius:20,
    height:320,
  },
  title: {
    fontSize: 18,
    left:10,
    fontWeight:'bold',
    color:'FF4500',
    top: 10,
  },
  subTitle: {
    fontSize: 12,
    left:10,
    fontWeight: "400",
    top:10,
  },
  image: {
    width: "100%",
    height: 200,
    left: 0,
    borderRadius:10
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  filterButton: {
    backgroundColor: '#007BFF', // Electric blue background color for filters
    padding: 10,
    borderRadius: 5,
  }

});
export default HomeScreen;