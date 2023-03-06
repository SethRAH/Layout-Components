function HBoxContainer(){
    const style = `.hbox-container {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: baseline;
        height: 100%;
        width: 100%;
}`;

    return (
    <>
      <style>{style}</style>
      <div className={"hbox-container"}>
          <slot><code>This is where you place children</code></slot>
      </div>
    </>
    );
}

export default HBoxContainer;