import React from 'react';

interface ListProps<T> {
  data : T[]
  styles? :string
  renderItem : (item: T) => React.ReactNode
}
export const List = <T extends {id: number}> ({data, renderItem, styles}: ListProps<T>) => {
  return (
    <div className={styles}>
      {data.map((item)=> (
        <React.Fragment key={item.id}>
          {renderItem(item)}
        </React.Fragment>
      ))}
    </div>
  );
};