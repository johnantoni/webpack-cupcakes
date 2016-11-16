import React from 'react';
import {Checkbox, CheckboxGroup} from 'react-checkbox-group';
import Radio from './Radio';

class CreateCupcake extends React.Component {
  constructor() {
    super();
    this.state = {
      cake: '',
      icing: '',
      toppings: [],
      image: '',
      images: ["/images/blackberry.png", "/images/blueberry.png", "/images/cherry.png",
            "/images/chocolate-baubles.png", "/images/chocolate-cake.png", "/images/chocolate-icing.png", "/images/cream-cheese-icing.png",
            "/images/kiwi.png", "/images/mint-icing.png", "/images/peanut-butter-icing.png", "/images/pink-icing.png",
            "/images/rainbow-sprinkles.png", "/images/raspberry.png", "/images/red-and-white-stars.png", "/images/red-baubles.png",
            "/images/red-velvet-cake.png", "/images/reeses.png", "/images/smarties.png", "/images/strawberry.png", "/images/vanilla-cake.png"]
    }
    this.changeCake = this.changeCake.bind(this);
    this.changeIcing = this.changeIcing.bind(this);
    this.changeToppings = this.changeToppings.bind(this);
  }

  componentWillMount() {
    this.state.images.forEach((src) => {
      const img = document.createElement('img');
      img.src = src; // Assigning the img src immediately requests the image
    });
  }

  componentDidMount() {
    this.updateCanvas();
  }

  componentDidUpdate() {
    this.updateCanvas();
  }


  changeCake(item) {
    let src = {cake: item.target.value};
    this.setState(src);
  }

  changeIcing(item) {
    let src = {icing: item.target.value}
    this.setState(src);
  }

  changeToppings(newToppings) {
    let src = {toppings: newToppings}
    this.setState(src);
  }


    // Add Images Functions

  addCake(ctx, imgSrc)  {
    ctx.clearRect(0,0,360,480);
    this.addImage(ctx, imgSrc);
  }

  addIcing(ctx, imgSrc)  {
    ctx.clearRect(0,0,360,480);
    this.addImage(ctx, imgSrc);
  }

  toppingsSrc(ctx, arr) {
    // console.log(arr);
    ctx.clearRect(0,0,360,480);
    arr.forEach((item) => {
      this.addImage(ctx, item)
    })
  }

  addImage(ctx, imgSrc) {
    var image = new Image();
    image.src = `/images/${imgSrc}`

    this.state.images.map((img) => {
      return `<img src=${img.src}></img>`
    })

    image.onload = function()  {
      ctx.drawImage(image, 0, 0);
    }
  }

  updateCanvas() {
    const srcToppings = this.state.toppings;
    // console.log(srcToppings);
    let addToppings = srcToppings.map((item) => {
      return `${item}.png`;
    });
    // console.log(addToppings);

    let cakeSrc = `${this.state.cake}.png`;
    let icingSrc = `${this.state.icing}.png`;

    const ctx = this.refs.canvas.getContext('2d');

    this.addCake(ctx, cakeSrc);
    this.addIcing(ctx, icingSrc);
    this.toppingsSrc(ctx, addToppings);

  }

  saveCanvas() {
    let url = this.props.dataURL;
    url = this.refs.canvas.toDataURL();
    return url;
  }

  createCupcake(event) {
    event.preventDefault();

    const cupcake = {
      cake: this.state.cake,
      icing: this.state.icing,
      toppings: this.state.toppings,
      image: this.saveCanvas(),
    }

    if ( this.state.cake !== "" && this.state.icing !== "" ) {
      this.props.addCupcake(cupcake);

    }
    const ctx = this.refs.canvas.getContext('2d');
    ctx.clearRect(0,0,360,480);
    this.setState({cake: "", icing: "", toppings: []});
  }

  render() {
    return (
      <div>
        <div className="cupcakeImg">
          <img src="/images/logo.png" className="logo"alt="Cupcake Nation Logo"/>
          <canvas ref="canvas" width={360} height={480}/>
        </div>
        <div className="form">
          <div className="cupcakes">
            <form onSubmit={(e) => this.createCupcake(e)}>
              <img src="/images/logo.png" className="logo"alt="Cupcake Nation Logo"/>
              <h3>Choose a Cake Type</h3>
                <Radio name={"vanilla"} cake={this.state.cake} changeCake={this.changeCake} type={"cake"}/>
                <Radio name={"red-velvet"} cake={this.state.cake} changeCake={this.changeCake} type={"cake"}/>
                <Radio name={"chocolate"} cake={this.state.cake} changeCake={this.changeCake} type={"cake"}/>
                <Radio name={"coffee"} cake={this.state.cake} changeCake={this.changeCake} type={"cake"}/>
                <Radio name={"carrot"} cake={this.state.cake} changeCake={this.changeCake} type={"cake"}/>
                <Radio name={"chocolate-chip"} cake={this.state.cake} changeCake={this.changeCake} type={"cake"}/>

                <h3>Choose a Frosting Type</h3>

                <Radio name={"vanilla"} icing={this.state.icing} changeIcing={this.changeIcing} type={"icing"}/>
                <Radio name={"cream-cheese"} icing={this.state.icing} changeIcing={this.changeIcing} type={"icing"}/>
                <Radio name={"chocolate"} icing={this.state.icing} changeIcing={this.changeIcing} type={"icing"}/>
                <Radio name={"pink"} icing={this.state.icing} changeIcing={this.changeIcing} type={"icing"}/>
                <Radio name={"peanut-butter"} icing={this.state.icing} changeIcing={this.changeIcing} type={"icing"}/>
                <Radio name={"mint"} icing={this.state.icing} changeIcing={this.changeIcing} type={"icing"}/>

                <h3>Choose some Toppings</h3>
                <div className="checkboxes">
                  <CheckboxGroup
                    name="toppings"
                    value={this.state.toppings}
                    onChange={this.changeToppings}>

                    <label className="inputcheck"><Checkbox value="blackberry"/><img src="/images/radio/input-blackberry.png" alt="blackberry png"/></label>
                    <label className="inputcheck"><Checkbox value="blueberry"/><img src="/images/radio/input-blueberry.png" alt="blueberry png"/></label>
                    <label className="inputcheck"><Checkbox value="cherry"/><img src="/images/radio/input-cherry.png" alt="cherry png"/></label>
                    <label className="inputcheck"><Checkbox value="chocolate-baubles"/><img src="/images/radio/input-chocolate-baubles.png" alt="chocolate png"/></label>
                    <label className="inputcheck"><Checkbox value="kiwi"/><img src="/images/radio/input-kiwi.png" alt="kiwi png"/></label>
                    <label className="inputcheck"><Checkbox value="rainbow-sprinkles"/><img src="/images/radio/input-rainbow.png" alt="sprinkles png"/></label>
                    <label className="inputcheck"><Checkbox value="raspberry"/><img src="/images/radio/input-raspberry.png"alt="raspberry png"/></label>
                    <label className="inputcheck"><Checkbox value="red-and-white-stars"/><img src="/images/radio/input-stars.png" alt="stars png"/></label>
                    <label className="inputcheck"><Checkbox value="red-baubles"/><img src="/images/radio/input-baubles.png" alt="baubles png"/></label>
                    <label className="inputcheck"><Checkbox value="reeses"/><img src="/images/radio/input-reeses.png" alt="reeses png"/></label>
                    <label className="inputcheck"><Checkbox value="smarties"/><img src="/images/radio/input-smarties.png" alt="smarties png"/></label>
                    <label className="inputcheck"><Checkbox value="strawberry"/><img src="/images/radio/input-strawberry.png" alt="strawberry png"/></label>
                  </CheckboxGroup>
                </div>
                <button type="submit">Add Cupcake To Order</button>
            </form>
          </div>
        </div>
      </div>

    )
  }
}

export default CreateCupcake;
