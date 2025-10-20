import {ImageBackground, View} from 'react-native';

export function Grid({
  items,
  cols,
  gap = 16,
  renderItem,
}: {
  items: any[];
  cols: number;
  gap?: any;
  renderItem: (item: any) => React.JSX.Element;
}) {
  const noOfRows = Math.ceil(items.length / cols);

  return (
    <View>
      {Array.from({length: noOfRows}).map((_, index) => {
        const rowItems = items.slice(index * cols, cols * (index + 1));
        return (
          <View
            key={index}
            style={{marginBottom: index === noOfRows - 1 ? 0 : gap}}>
            <Row items={rowItems} n={cols} gap={gap} renderItem={renderItem} />
          </View>
        );
      })}
    </View>
  );
}

function Row({items, n, gap = 16, renderItem}: {items: any[]; n: number; gap?: number; renderItem: (item: any) => React.JSX.Element}) {
  const itemMaxWidth = 100 / n;

  return (
    <View className="flex-row">
      {Array.from({length: n}, (_, i) => items[i]).map(
        (item, index) => (
          item ? (
            <View
              key={index}
              style={{
                maxWidth: `${itemMaxWidth}%`,
                marginEnd: index === n - 1 ? 0 : gap,
              }}
              className={`flex-1`}
            >
              {renderItem(item)}
            </View>

          ) : (
            <View
              key={index}
              style={{
                maxWidth: `${itemMaxWidth}%`,
                marginEnd: index === n - 1 ? 0 : gap,
              }}
              className={`flex-1`}
            />
          )
        ),
      )}
    </View>
  );
}
