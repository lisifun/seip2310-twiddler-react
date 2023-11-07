var buttonArray = [
  {
    buttonName: "Home",
    buttonClass: "updated",
    buttonClick: () => {
      window.location.reload();
    },
  },
  {
    buttonName: "Activity",
    buttonClass: "activity",
    buttonClick: () => {},
  },
  {
    buttonName: "Profile",
    buttonClass: "profile",
    buttonClick: () => {},
  },
  {
    buttonName: "More",
    buttonClass: "more",
    buttonClick: () => {},
  },
];

function Button(props) {
  return (
    <button className={props.class} onClick={props.onClick}>
      {props.name}
    </button>
  );
}

function HomeComponent() {
  return (
    <section id="section2">
      {buttonArray.map((x, index) => (
        <Button
          key={index}
          class={x.buttonClass}
          name={x.buttonName}
          onClick={x.buttonClick}
        />
      ))}
    </section>
  );
}

export default HomeComponent;
