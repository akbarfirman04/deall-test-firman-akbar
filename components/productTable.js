import React from 'react';
import { Table } from '@nextui-org/react';

const ProductTable = ({ products, columns }) => {
  return (
    <div className="w-screen sm:w-full">
      <Table
        compact
        css={{
          height: 'auto',
        }}
      >
        <Table.Header columns={columns}>
          {(column) => (
            <Table.Column key={column.key}>{column.label}</Table.Column>
          )}
        </Table.Header>
        <Table.Body items={products}>
          {(item) => (
            <Table.Row key={item.id}>
              {(columnKey) => <Table.Cell>{item[columnKey]}</Table.Cell>}
            </Table.Row>
          )}
        </Table.Body>
        <Table.Pagination shadow noMargin rowsPerPage={10} />
      </Table>
    </div>
  );
};

export default ProductTable;
