import { FlatList, Text, View } from 'react-native';
import UserCard from '../user-card/usercard';
import React from 'react';
import { styles } from './styles';

interface RecentSearchProps {
  data: Array<UserData>;
  onSelect: (user: UserData) => void;
}

const RecentSearch = ({ data, onSelect }: RecentSearchProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Recent searches</Text>
      </View>
      <FlatList
        data={data}
        renderItem={({ item }) => <UserCard key={item.id} data={item} onSelect={onSelect} />}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default RecentSearch;
