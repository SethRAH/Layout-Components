function VBoxContainer(){
    const style = `.vbox-container {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: baseline;
        height: 100%;
        width: 100%;
}`;

    return (
    <>
      <style>{style}</style>
      <div className={"vbox-container"}>
          <slot><code>This is where you place children</code></slot>
      </div>
    </>
    );
}

export default VBoxContainer;