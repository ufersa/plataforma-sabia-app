import React from 'react';
import { Text, View, FlatList } from 'react-native';
// import { View, Text, TouchableOpacity } from 'react-native';
import { connectHighlight, connectInfiniteHits } from 'react-instantsearch-native';

const Highlight = connectHighlight((props: any) => {
  const { attribute, hit, highlight } = props;
  const highlights = highlight({
    highlightProperty: '_highlightResult',
    attribute,
    hit,
  });

  return (
    <Text>
      {highlights.map(({ value, isHighlighted }: any, index: number) => {
        const style = {
          backgroundColor: isHighlighted ? 'yellow' : 'transparent',
        };

        return (
          <Text key={index} style={style}>
            {value}
          </Text>
        );
      })}
    </Text>
  );
});

const List = (props: any) => {
  // console.log(items);
  // const { items, refine } = props;
  // console.log(props);
  // return (
  //   <View>
  //     <View>
  //       {items.map((item: any) => (
  //         <TouchableOpacity
  //           key={item.value}
  //           onPress={() => refine(item.value)}
  //         >
  //           <Text>{item.label}</Text>
  //           <View>
  //             <Text>{item.count}</Text>
  //           </View>
  //         </TouchableOpacity>
  //       ))}
  //     </View>
  //   </View>
  // );
  const { hits, hasMore, refine } = props;

  return (
    <FlatList
      data={hits}
      keyExtractor={(item) => item.objectID}
      // ItemSeparatorComponent={() => <View />}
      onEndReached={() => hasMore && refine()}
      renderItem={({ item }) => (
        <View>
          <Highlight attribute="title" hit={item} />
        </View>
      )}
    />
  );
};

export default connectInfiniteHits(List);
