import React, {useState} from 'react';
import {
  Text,
  View,
  Modal,
  Pressable,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  FlatList,
  SafeAreaView,
  ToastAndroid,
} from 'react-native';

var days = "";
var months = "";
var years = "";
var width = Dimensions.get('window').width
var hight = Dimensions.get('window').height

const CustomBottomSheet = () => {
  const [ selectedYear, setSelectedYear ] = useState();
  const [ selectedMonth, setSelectedMonth ] = useState();
  const [ selectedDay, setSelectedDay ] = useState();
  const [select_Date,setSelectedDate] = useState([]);
  const [customdayChange, setCustomDayChange] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const Days = [
    {
      id: '1',
      title: '1',
    },
    {
      id: '2',
      title: '2',
    },
    {
      id: '3',
      title: '3',
    },
    {
      id: '4',
      title: '4',
    },
    {
      id: '5',
      title: '5',
    },
    {
      id: '6',
      title: '6',
    },
    {
      id: '7',
      title: '7',
    },
    {
      id: '8',
      title: '8',
    },
    {
      id: '9',
      title: '9',
    },
    {
      id: '10',
      title: '10',
    },
    {
      id: '11',
      title: '11',
    },
    {
      id: '12',
      title: '12',
    },
    {
      id: '13',
      title: '13',
    },
    {
      id: '14',
      title: '15',
    },
    {
      id: '16',
      title: '16',
    },
    {
      id: '17',
      title: '17',
    },
    {
      id: '18',
      title: '18',
    },
    {
      id: '19',
      title: '19',
    },
    {
      id: '20',
      title: '20',
    },
    {
      id: '21',
      title: '21',
    },
    {
      id: '22',
      title: '22',
    },
    {
      id: '23',
      title: '23',
    },
    {
      id: '24',
      title: '24',
    },
    {
      id: '25',
      title: '25',
    },
    {
      id: '26',
      title: '26',
    },
    {
      id: '27',
      title: '27',
    },
    {
      id: '28',
      title: '28',
    },
    {
      id: '29',
      title: '29',
    },
    {
      id: '30',
      title: '30',
    },
    {
      id: '31',
      title: '31',
    },
  ];
  const Months = [
    {
      id: '1',
      title: 'Jan',
    },
    {
      id: '2',
      title: 'Feb',
    },
    {
      id: '3',
      title: 'Mar',
    },
    {
      id: '4',
      title: 'Apr',
    },
    {
      id: '5',
      title: 'May',
    },
    {
      id: '6',
      title: 'Jun',
    },
    {
      id: '7',
      title: 'Jul',
    },
    {
      id: '8',
      title: 'Aug',
    },
    {
      id: '9',
      title: 'Sep',
    },
    {
      id: '10',
      title: 'Oct',
    },
    {
      id: '11',
      title: 'Nov',
    },
    {
      id: '12',
      title: 'Dec',
    },
  ];
  const Year = [
    {
      id: '1',
      title: '2010',
    },
    {
      id: '2',
      title: '2011',
    },
    {
      id: '3',
      title: '2012',
    },
    {
      id: '4',
      title: '2013',
    },
    {
      id: '5',
      title: '2014',
    },
    {
      id: '6',
      title: '2015',
    },
    {
      id: '7',
      title: '2016',
    },
    {
      id: '8',
      title: '2017',
    },
    {
      id: '9',
      title: '2018',
    },
    {
      id: '10',
      title: '2019',
    },
    {
      id: '11',
      title: '2020',
    },
    {
      id: '12',
      title: '2021',
    },
    {
      id: '13',
      title: '2022',
    },
    {
      id: '14',
      title: '2023',
    },
    {
      id: '15',
      title: '2024',
    },{
      id: '16',
      title: '2025',
    },{
      id: '17',
      title: '2026',
    },{
      id: '18',
      title: '2027',
    },{
      id: '19',
      title: '2028',
    },
    {
      id: '20',
      title: '2029',
    },
  ];
  return (
    <View>
      <View style={styles.centeredView}>
        <Modal
          style={{position: 'absolute', bottom: 0}}
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>

          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={{flexDirection: 'row'}}>
                <Text style={[styles.modalText2, {color: 'green'}]}>Day</Text>
                <Text style={[styles.modalText2, {color: 'green'}]}>Month</Text>
                <Text style={[styles.modalText2, {color: 'green'}]}>Year</Text>
              </View>
              <SafeAreaView
                style={{flexDirection: 'row', justifyContent: 'space-between',elevation:200}}>
                <FlatList data={Days}
                  style={{height: 150}}
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({item,index}) => (
                        <TouchableOpacity onPress={() => [setSelectedDay(index),days = item.title,setSelectedDate(days + "/" + months + "/" + years)]}>
                        <Text
                      style={selectedDay == index ? styles.modalText4 : [
                        styles.modalText3,
                        {
                          textAlign: 'center',
                          color: 'black',
                        },
                      ]}
                        >  
                        {item.title}
                      </Text>
                        </TouchableOpacity>
                  )}
                  keyExtractor={item => item.id}
                />
                <FlatList
                  data={Months}
                  style={{height: 140,elevation:120}}
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({item,index}) => (
                      <TouchableOpacity onPress={()=>[setSelectedMonth(index),months = item.title,setSelectedDate(days + "/" + months + "/" + years)]}>
                      <Text
                      style={selectedMonth == index ? styles.modalText4 : [
                        styles.modalText3,
                        {
                          textAlign: 'center',
                          color: 'black',
                        },
                      ]}
                        >  
                        {item.title}
                      </Text>
                      </TouchableOpacity>
                  )}
                  keyExtractor={item => item.id}
                />
                <FlatList
                  data={Year}
                  style={{height: 150}}
                  showsVerticalScrollIndicator={false}
                  showsHorizontalScrollIndicator={false}
                  renderItem={({item,index}) => (
                    <TouchableOpacity onPress={()=> [
                      setSelectedYear(index),
                      years = item.title,setSelectedDate(days + "/" + months + "/" + years)]}
                    >
                      <Text
                      style={selectedYear == index ? styles.modalText4 : [
                        styles.modalText3,
                        {
                          textAlign: 'center',
                          color: 'black',
                        },
                      ]}
                        >  
                        {item.title}
                      </Text>
                    </TouchableOpacity>
                  )}
                  keyExtractor={item => item.id}
                />
              </SafeAreaView>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={{
                    marginTop:14, bottom:15, padding:15,height:50,borderRadius:20,marginStart: 40, width: 140,elevation:2,backgroundColor:'#ffe6e6'}
                  } onPress={()=> setModalVisible(false)}>
                  <Text style={{color: '#B2BEB5', textAlign: 'center'}}>
                    Cancel
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={
                    {marginTop: 14,bottom:15, padding:15,height:50,borderRadius:20,marginStart:40, width: 140,backgroundColor: 'blue'}
                  }
                  onPress={()=> [setCustomDayChange(true),validation]}
                  >
                  <Text
                    style={{
                      color: 'white',
                      textAlign: 'center',
                    }}>
                    Done
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </View>
      <View>
      <View style={{flexDirection: 'row'}}>
                <View style={{marginStart:25}}>
                <Text style={[styles.modalText,{fontWeight:'bold'}]}>From</Text>
                </View>
                <View
                  style={[
                    styles.modalText2,
                    {flexDirection: 'column' , marginStart: 230 },
                  ]}>
                  <Text style={{color: 'blue',fontWeight:'bold'}}>To</Text>
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Pressable
                  style={[styles.modalText3, {marginStart: 15}]} onPress={()=> setModalVisible(true)}>
                  <Text style={{textAlign: 'center'}}>
                    {customdayChange ? validation(select_Date) : new Date().getDate()+ "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear()}
                    </Text>
                </Pressable>
                <Pressable
                  style={[styles.modalText3, {marginStart: 140}]}>
                  <TextInput
                    style={{padding:20,marginEnd:-20}}
                    placeholder={new Date().getDate()+ "/" + (new Date().getMonth() + 1) + "/" + new Date().getFullYear()}
                    onChangeText={text => {
                    }}></TextInput>
                </Pressable>
              </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    position: 'absolute',
    marginTop: 10,
    flexDirection: 'row',
    bottom: 0,
  },
  modalView: {
    height: hight - hight/2 - 150,
    width: width,
    backgroundColor: 'white',
    borderTopEndRadius: 20,
    borderTopLeftRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 3,
  },

  modalText: {
    marginStart: 20,
    marginTop: 25,
    color: 'blue',
  },
  modalText3: {
    marginStart: 10,
    marginTop: 20,
    width: 110,
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
  },
  modalText4: {
    marginStart: 10,
    marginTop: 20,
    width: 110,
    textAlign:'center',
    backgroundColor: 'green',
    borderRadius: 10,
    padding: 10,
  },


  modalText2: {
    flex: 1,
    marginStart: 50,
    marginTop: 25,
    justifyContent: 'space-evenly',
    elevation: 2,
    fontWeight:'bold',
    elevation:120
  },
});

function validation(select_Date)
{
  var x = select_Date[0] + select_Date[1]
  var y = select_Date[3]
if(((x == "29" || x == "30" || x == "31") && y == "F"))
{
  ToastAndroid.show('Invalid date!', ToastAndroid.LONG);
}
else
{
  return select_Date
}
}

export default CustomBottomSheet;
