import React from 'react';
import { TextInput, View } from 'react-native';
import { styles } from './styles';
import { colors } from '../../common/colors';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface SearchBarProps {
  value: string;
  onSubmit?: () => void;
  placeholder: string;
  onChangeValue: (value: string) => void;
}

const SearchBar = React.forwardRef<TextInput, SearchBarProps>((props, ref) => {
  const { value, onSubmit, placeholder, onChangeValue } = props;
  return (
    <View style={styles.container}>
      <TextInput
        ref={ref}
        value={value}
        style={styles.input}
        placeholder={placeholder}
        onEndEditing={onSubmit}
        onChangeText={onChangeValue}
        returnKeyType={'search'}
        placeholderTextColor={colors.placeholder}
        autoCapitalize={'none'}
      />
      <View style={styles.icon}>
        <Icon name={'search'} size={24} color={colors.input_text} />
      </View>
    </View>
  );
});

export default SearchBar;
