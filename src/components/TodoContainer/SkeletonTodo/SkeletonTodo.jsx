  // import skelton components
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
  // import css files
import 'react-loading-skeleton/dist/skeleton.css'; // Ensure skeleton CSS is imported
import './SkeletonTodo.css'
export default function SkeletonTodo() {
  return (
    <div className='skeletonContainer col gap30'>
      <SkeletonTheme baseColor="#C8C8C859" highlightColor="#4880FFA0">
        <Skeleton className='col gap30' count={5} height={93}/>
      </SkeletonTheme>
    </div>
  )
}
