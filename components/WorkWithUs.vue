<template>
  <div>
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Unica+One"
    />

    <a name="workwithus"></a>
    <div id="dmg-workwithus" class="black color-teal">
      <div class="spacer">&nbsp;</div>
      <div class="spacer">&nbsp;</div>
      <div class="spacer">&nbsp;</div>
      <div class="spacer">&nbsp;</div>
      <div class="form_wrapper color-teal">
        <form
          method="post"
          enctype="multipart/form-data"
          name="lets_connect"
          netlify
        >
          <div class="gform_heading">
            <h3 class="gform_title">LET'S CONNECT</h3>
          </div>

          <div class="gform_body">
            <ul
              class="gform_fields top_label form_sublabel_above description_above"
            >
              <li class="interest gfield gfield_label">
                <label for="input_2_42">
                  <span class="asterisk-red">*&nbsp;</span>Tell Us What You're
                  Interested In
                </label>
                <v-select :name="input_42" :options="options" />
              </li>
              <li class="name gfield_label ginput_container_text">
                <label for="name">
                  <span class="asterisk-red">*&nbsp;</span>Name
                </label>
                <br />
                <input type="text" name="Name" placeholder="Name" id="name" />
              </li>
              <li class="email gfield_label ginput_container_text">
                <label for="email">
                  <span class="asterisk-red">*&nbsp;</span>Email
                </label>
                <br />
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  id="email"
                />
              </li>
              <li class="company-name gfield_label ginput_container_text">
                <label for="company_name">
                  <span class="asterisk-red">*&nbsp;</span>Company Name
                </label>
                <br />
                <input
                  type="text"
                  name="company_name"
                  placeholder="Company Name"
                  id="company_name"
                />
              </li>
              <li class="form-spacer"></li>
              <li class="wish gfield_label">
                <label for="input_2_20">What Can We Do For You?</label>
                <br />
                <div class="ginput_container ginput_container_textarea">
                  <textarea
                    name="input_20"
                    id="input_2_20"
                    class="textarea large"
                    aria-invalid="false"
                    rows="10"
                    cols="50"
                  ></textarea>
                </div>
              </li>
              <!--  -->
              <li
                id="field_2_37"
                class="gfield acknowledgement gfield_contains_required"
              >
                <div class="ginput_container ginput_container_checkbox">
                  <ul class="gfield_checkbox" id="input_2_37">
                    <li class="gchoice_2_37_1">
                      <input
                        name="more_info"
                        type="checkbox"
                        id="choice_2_37_1"
                        value="<p><span class='asterisk-red gfield_required'>*</span> Yes, I'd also like to receive information about additional products or services that may be of interest to me. Information submitted through this form is subject to our Privacy Policy</p>"
                      />
                    </li>
                    <li>
                      <label
                        for="choice_2_37_1 gfield_required"
                        id="label_2_37_1"
                      >
                        <p>
                          <span class="asterisk-red">*</span>
                          Yes, I'd also like to receive information about
                          additional products or services that may be of
                          interest to me. Information submitted through this
                          form is subject to our Privacy Policy.
                        </p>
                      </label>
                    </li>
                  </ul>
                </div>
              </li>
              <!--  -->
              <li class="gfield_links">
                <a href="https://dicemedia.bamboohr.com/jobs/" target="_blank"
                  >Dice Media Group Careers</a
                >
              </li>
            </ul>
          </div>

          <div class="gform_footer top_label">
            <input
              type="submit"
              id="gform_submit_button_2"
              class="gform_button button"
              value="SUBMIT"
            />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [
        "Full Service: Creative, Strategy, Media",
        "Consulting Offerings: 4Ds, MediaMentors",
        "Small to Midsize Business Offerings",
        "Other Services: DMGTalent, DMGExperience, Etc.",
        "Studio/Production",
        "Press & Other Inquires"
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.black {
  background-color: black;
  color: white;
}

.color-teal {
  color: #66fcf1 !important;
}

#dmg-workwithus .gfield_label {
  font-family: "Unica One", Helvetica, Arial, sans-serif;
  font-weight: 700;
  line-height: 1.1;
}

#dmg-workwithus .gform_footer {
  text-align: center;
}
h1,
h2,
h3,
h4,
h5,
h6,
.h1,
#dmg-workwithus h3.gform_title,
.h2,
.h3,
.h4,
.h5,
.h6 {
  font-family: "Unica One", Helvetica, Arial, sans-serif;
  font-weight: 700;
  line-height: 1.1;
  color: inherit;
  text-transform: uppercase;
}

.page-headline,
#dmg-workwithus .gform_heading {
  text-align: center;
}

h1,
.h1,
#vm-workwithus h3.gform_title {
  font-size: 2.6rem;
}

@media (min-width: 701px) {
  h1,
  .h1,
  #vm-workwithus h3.gform_title {
    font-size: 33pt;
  }
}

h1.xl,
.h1.xl,
#vm-workwithus h3.xl.gform_title {
  font-size: 4rem;
}

@media (max-width: 700px) {
  h1.xl,
  .h1.xl,
  #vm-workwithus h3.xl.gform_title {
    font-size: 41.25pt;
  }
}

form h1,
form h2,
form h3 {
  font-weight: 400;
  border: none;
  background: 0 0;
}

.form_wrapper h3.gform_title {
  letter-spacing: normal !important;
  margin: 10px 0 6px;
  margin-top: 10px;
  margin-bottom: 6px;
}

.gform_title {
  margin-top: 0;
  text-transform: uppercase;
  font-size: 33pt;
  margin-bottom: 9.5pt;
  color: #66fcf1;
}

/* interest select start */

/* interest select finish */

ul.gfield_checkbox {
  list-style-type: none;
  display: grid;
  grid-template-columns: 1fr 11fr;
  grid-template-rows: 1fr;
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}

.gfield_checkbox li label p {
  font-weight: normal;
  cursor: pointer;
}
.gchoice_2_37_1 {
  grid-area: 1 / 1 / 2 / 2;
}
#label_2_37_1 {
  grid-area: 1 / 2 / 2 / 3;
}

.gform_body {
  margin-right: 10%;
}
.gform_body li a {
  display: inline-block;
  zoom: 1;
  *display: inline;
  padding: 16px;
  text-decoration: none;
  color: #66fcf1;
}

.gform_body li a:visited {
  display: inline-block;
  zoom: 1;
  *display: inline;
  padding: 16px;
  text-decoration: none;
  color: #66fcf1;
}

#field_2_37 p,
#field_5_7 p,
#field_11_6 p {
  font-size: 12pt;
}

p {
  margin: 0 0 9.5pt;
  text-transform: initial;
}
#gform_submit_button_2 {
  padding: 10px 10%;
  font-size: 1.25em;
  color: #66fcf1;
  border-color: #66fcf1;
  background-color: transparent;
  min-width: 100px;
  width: auto;
}
gform_footer {
  text-align: center;
}
/* form fields layout */
.gform_fields {
  display: grid;
  grid-gap: 20px;
  grid-template-areas:
    "interest interest"
    "name email"
    "company-name ."
    "wish wish"
    "acknowledgement gfield_links";
}

.interest {
  grid-area: interest;
}
.name {
  grid-area: name;
}
.email {
  grid-area: email;
}
.company-name {
  grid-area: company-name;
}

.wish {
  grid-area: wish;
}
.acknowledgement {
  grid-area: acknowledgement;
}
.gfield_links {
  grid-area: gfield_links;
}

#gform_submit_button_2[data-v-1aeeb4e0] {
  padding: 10px 10%;
  font-size: 1.25em;
  color: #66fcf1;
  border-color: #66fcf1;
  background-color: transparent;
  min-width: 100px;
  width: auto;
  font-family: "Unica One", Helvetica, Arial, sans-serif;
  border: 2px solid;
  border-radius: 30px;
}
#dmg-workwithus .gform_fields label {
  text-transform: uppercase;
  margin-bottom: 0;
}

.form-control,
#dmg-workwithus .v-select,
#dmg-workwithus .ginput_container_text input,
#dmg-workwithus .ginput_container_phone input,
#dmg-workwithus .ginput_container_email input,
#dmg-workwithus .ginput_container_textarea textarea {
  display: block;
  width: 100%;
  height: 30pt;
  padding: 6px 12px;
  font-size: 12pt;
  line-height: 1.6;
  color: #939090;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  font-family: "proxima-nova", "Proxima Nova", Helvetica, Arial, sans-serif;
}

#dmg-workwithus .ginput_container_textarea textarea {
  height: 80pt;
}

/* Media Queries */

/*  --phone--  */
@media (max-width: 400px) {
  /* form fields layout */
  .gform_fields {
    display: grid;
    grid-gap: 20px;
    grid-template-areas:
      "interest"
      "name"
      "email"
      "company-name"
      "wish"
      "wish"
      "acknowledgement"
      "gfield_links";
  }

  .interest {
    grid-area: interest;
  }
  .name {
    grid-area: name;
  }
  .email {
    grid-area: email;
  }
  .company-name {
    grid-area: company-name;
  }

  .wish {
    grid-area: wish;
  }
  .acknowledgement {
    grid-area: acknowledgement;
  }
  .gfield_links {
    grid-area: gfield_links;
  }
}

/* tablet */
@media (max-width: 700px) {
}
</style>
