import React ,{Component} from 'react'
import { Dimensions } from 'react-native';
import {View, Text,TouchableOpacity,StyleSheet} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view'
import db from '../config'
import {listItem} from 'react-native-elements'

export default class SwipeableFlatList extends Component {
    constructor(props){
        super(props)

        this.state={
            allNotifications=this.props.allNotifications
        }
    }

    onSwipeValueChange=(swipeData)=>{
        var allNotifications=this.state.allNotifications
        const {key,value}=swipeData;

        if(value < -Dimensions.get('window').width){
            const newData=[...allNotifications];
            const prevIndex=allNotifications.findIndex(item=>item.key===key);
            this.updateMarkAsRead(allNotifications[prevIndex]);
            newData.splice(prevIndex,1);
            this.setState({
                allNotifications:newData
            })

        }
    }

    updateMarkAsRead=(notificaton)=>{
        db.collection('notifications').doc(notificaton.doc_id).update({
            'notificationStatus':"read"
        })
    }

    renderItem=(data)=>{
      <ListItem 
      leftElement={<Icon name='book' type="font-awesome" color='#696969' />}
      title={data.item.book_name} 
      titleStyle={{color:'black',fontWeight:'bold'}}
      subtitle={data.item.message}
      bottomDivider
       />        
    }

    renderHiddenItem=()=>{
        <View style={styles.roBack}>
            <View style={[styles.backrightbutton,styles.backrightbuttonright]}>
                <Text style={styles.backTextWhite}></Text>
            </View>
        </View>
    }

    render(){
        return(
            <View>
                <SwipeListView
                disableRightSwipe
                data={this.state.allNotifications}
                renderItem={this.renderItem}
                renderHiddenItem={this.renderHiddenItem}
                rightOpenValue={-Dimensions.get('window').width}
                previewRowKey={0}
                previewOpenValue={-40}
                previewOpenDelay={3000}
                onSwipeValueChange={this.onSwipeValueChange} />
            </View>
        )
    }
}

const styles=StyleSheet.create({
    rowBack:{
        alignItems:'center',
        backgroundColor:'#29b6f6',
        flex:1,
        flexDirection:'row',
        justifyContent:'space-between',
        paddingLeft:15
    },
    backrightbutton:{
        alignItems:'center',
        bottom:0,
        justifyContent:'center',
        width:100,
        top:0
    },
    backrightbuttonright:{
        backgroundColor:'#29b6f6',
        right:0
    },
    backTextWhite:{
        color:'white',
        fontWeight:'bold',
        fontSize:15
    }
})
