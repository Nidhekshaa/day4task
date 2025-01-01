import './List.css'
function List() {
    return (
          <ol>
            <li>fruits
                <ul class="star">
                    <li>apple</li>
                    <li>mango</li>
                    <li>banana</li>
                </ul>
            </li>
            <li>vegetables</li>
            <ol class="roman">
                <li>carrort</li>
                <li>Beans</li>
                <li>beetroot</li>
            </ol>
            <li>birds</li>
            <ul class="hash">
                    <li>peacock</li>
                    <li>parrot</li>
                    <li>sparrow</li>
                </ul>
          </ol>
    )
  }

export default List;