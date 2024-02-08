import { FC, Suspense } from 'react';
import ListUser from './ListUser';

interface HydrationStreamSuspensePageProps {}

const HydrationStreamSuspensePage: FC<
  HydrationStreamSuspensePageProps
> = ({}) => {
  return (
    <main className="max-w-7xl p-5">
      <Suspense fallback={<span>Loading</span>}><ListUser /></Suspense>
    </main>
  );
};

export default HydrationStreamSuspensePage;
