/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/native';

type Props = {
  images: string[];
  onPress: (index: number) => void;
  shift?: number;
};

const IMAGE_WIDTH = 120;
const IMAGE_HEIGH = 120;

const ScrollViewWrapper = styled.ScrollView`
  flex-grow: 0;
`;

const ImageTouchable = styled.TouchableOpacity`
  margin-right: 10px;
`;

const ImageWrapper = styled.Image`
  width: ${IMAGE_WIDTH}px;
  height: ${IMAGE_HEIGH}px;
  border-radius: 10px;
`;

const ImageList = ({ images, shift = 0, onPress }: Props) => (
  <ScrollViewWrapper
    horizontal
    contentOffset={{ x: shift * IMAGE_WIDTH, y: 0 }}
    contentContainerStyle={{
      flex: 0,
      paddingLeft: 10,
      marginBottom: 10,
    }}
    showsHorizontalScrollIndicator={false}
  >
    {images.map((imageUrl, index) => (
      <ImageTouchable
        key={`${imageUrl}_${index}`}
        activeOpacity={0.8}
        onPress={() => onPress(index)}
      >
        <ImageWrapper source={{ uri: imageUrl }} />
      </ImageTouchable>
    ))}
  </ScrollViewWrapper>
);

export default ImageList;
