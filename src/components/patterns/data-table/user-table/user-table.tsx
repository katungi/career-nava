'use client';

import * as React from 'react';

import { useDataTable } from '~/hooks/use-data-table';
import { api } from '~/trpc/react';
import { DataTable } from '../data-table';
import { useUserTable } from '../data-table-provider';
import { DataTableToolbar } from '../data-table-toolbar';
import { TableSkeleton } from '../table-skeleton';
import {
  filterableColumns,
  getColumns,
  searchableColumns,
} from './user-table-columns';

import { useSearchParams } from 'next/navigation';
import { searchParamsSchema } from '../validations';

export function UserTable() {
  const { enableAdvancedFilter } = useUserTable();
  const searchParams = useSearchParams();

  const search = searchParamsSchema.parse(
    Object.fromEntries(searchParams.entries())
  );

  const { data, isLoading } = api.superAdmin.getUserData.useQuery(
    {
      page: search.page,
      perPage: search.per_page,
      sort: search.sort,
      email: search.email,
      planId: search.planId,
      role: search.role,
      from: search.from,
      to: search.to,
    },
    {
      placeholderData: (prev) => prev,
    }
  );

  // Memoize the columns so they don't re-render on every render
  const columns = React.useMemo(() => getColumns(), []);

  const { table } = useDataTable({
    data: data?.data ?? [],
    columns,
    pageCount: data?.pageCount ?? 0,
    searchableColumns,
    filterableColumns,
    enableAdvancedFilter,
  });

  return (
    <div className="w-full space-y-2.5 overflow-auto">
      {isLoading ? (
        <TableSkeleton columnCount={6} rowCount={search.per_page} />
      ) : (
        <>
          <DataTableToolbar
            table={table}
            filterableColumns={filterableColumns}
            searchableColumns={searchableColumns}
          />
          <DataTable table={table} columns={columns} />
        </>
      )}
    </div>
  );
}
