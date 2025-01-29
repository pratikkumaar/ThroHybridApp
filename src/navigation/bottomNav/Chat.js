import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';

// Mock data for the chat list
const chatData = [
  {
    id: '1',
    title: 'Camping Group camp i...',
    createdBy: 'Kabby_4',
    message: '',
    time: '',
    unreadCount: null,
    images: [
      'https://example.com/image1.jpg',
      'https://example.com/image2.jpg',
      'https://example.com/image3.jpg',
    ],
    isChatButtonVisible: true,
  },
  {
    id: '2',
    title: 'Cricket Training Session',
    createdBy: 'You',
    message: 'Darth_ved: I have co...',
    time: '09:20 AM',
    unreadCount: 51,
    images: [
      'https://example.com/image4.jpg',
      'https://example.com/image5.jpg',
      'https://example.com/image6.jpg',
    ],
    isChatButtonVisible: false,
  },
  {
    id: '3',
    title: 'Swimming Competition',
    createdBy: 'Funky4U',
    message: 'Sonshine: Are we allowe...',
    time: '2 days ago',
    unreadCount: null,
    images: [
      'https://example.com/image7.jpg',
      'https://example.com/image8.jpg',
      'https://example.com/image9.jpg',
    ],
    isChatButtonVisible: false,
  },
];

const Chat = () => {
  // Header Buttons
  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={[styles.headerButton, styles.activeButton]}>
        <Text style={[styles.headerText, styles.activeText]}>All</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.headerButton}>
        <Text style={styles.headerText}>Created by Others</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.headerButton}>
        <Text style={styles.headerText}>Created by Me</Text>
      </TouchableOpacity>
    </View>
  );

  // Render individual chat items
  const renderItem = ({item}) => (
    <View style={styles.chatContainer}>
      {/* Profile Pictures */}
      <View style={styles.imageContainer}>
        {item.images.slice(0, 4).map((image, index) => (
          <Image
            key={index}
            source={{uri: image}}
            style={styles.profileImage}
          />
        ))}
      </View>

      {/* Chat Info */}
      <View style={styles.chatInfo}>
        <Text style={styles.chatTitle}>
          {item.title}{' '}
          <Text style={styles.createdBy}>Created by {item.createdBy}</Text>
        </Text>

        {item.message ? (
          <Text style={styles.lastMessage}>{item.message}</Text>
        ) : null}

        <View style={styles.chatMeta}>
          {item.time ? <Text style={styles.chatTime}>{item.time}</Text> : null}
          {item.unreadCount ? (
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadText}>+{item.unreadCount}</Text>
            </View>
          ) : null}
        </View>
      </View>

      {/* Chat Button */}
      {item.isChatButtonVisible && (
        <TouchableOpacity style={styles.chatButton}>
          <Text style={styles.chatButtonText}>Chat</Text>
        </TouchableOpacity>
      )}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerTitle}>Chat</Text>
      {renderHeader()}
      <FlatList
        data={chatData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.listContainer}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 16,
    marginBottom: 8,
    textAlign: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 8,
  },
  headerButton: {
    padding: 8,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  activeButton: {
    backgroundColor: '#FDE6DD',
    borderColor: '#F19A57',
  },
  headerText: {
    fontSize: 14,
    color: '#999',
  },
  activeText: {
    color: '#F19A57',
    fontWeight: 'bold',
  },
  listContainer: {
    paddingBottom: 16,
  },
  chatContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    padding: 16,
    backgroundColor: '#FDE6DD',
    borderRadius: 12,
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: 50,
  },
  profileImage: {
    width: 20,
    height: 20,
    borderRadius: 10,
    margin: 2,
  },
  chatInfo: {
    flex: 1,
    marginHorizontal: 12,
  },
  chatTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  createdBy: {
    fontSize: 12,
    color: '#999',
  },
  lastMessage: {
    fontSize: 14,
    color: '#555',
    marginVertical: 4,
  },
  chatMeta: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  chatTime: {
    fontSize: 12,
    color: '#999',
  },
  unreadBadge: {
    backgroundColor: '#F19A57',
    borderRadius: 12,
    paddingHorizontal: 8,
    paddingVertical: 2,
    marginLeft: 8,
  },
  unreadText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: 'bold',
  },
  chatButton: {
    backgroundColor: '#F19A57',
    borderRadius: 12,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  chatButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default Chat;
