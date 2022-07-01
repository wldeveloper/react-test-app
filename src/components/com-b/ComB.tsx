import css from './ComB.module.scss'

interface IProps {
  name: string
}

function ComB({ name }: IProps) {
  return <div className={css.test}>com b{name}</div>
}

export default ComB
