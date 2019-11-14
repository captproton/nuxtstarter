<template>
    <div>
    <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Unica+One">

        <a name="workwithus"></a>
        <div class="spacer">&nbsp;</div>
        <div class="spacer">&nbsp;</div>
        <div class="spacer">&nbsp;</div>
        <div class="spacer">&nbsp;</div>
        <div id="dmg-workwithus" class="black color-teal">
            <div class="container">
                <div class="gform_wrapper">
                    
                    <form   method="post" 
                            enctype="multipart/form-data" 
                            target="gform_ajax_frame_2" 
                            id="gform_2" 
                            action="/#gf_2">

                        <div class="gform_heading">
                            <h3 class="gform_title">LET'S CONNECT</h3>
                        </div>

                        <div class="gform_body">
                            <ul class="gform_fields top_label form_sublabel_above description_above">
                                <li class="interest gfield gfield_label">
                                    <label for="input_2_42">Tell Us What You're Interested In:*</label>
                                    <div class="select">
                                        <select name="input_42" id="input_2_42" class="large gfield_select s-hidden" aria-required="true" aria-invalid="false" required>
                                            <option value="" selected="selected" class="gf_placeholder">Please Select:</option>
                                            <option value="Full Service: Creative, Strategy, Media" selected="selected">Full Service: Creative, Strategy, Media</option>
                                            <option value="Consulting Offerings: 4Ds, VaynerMentors">Consulting Offerings: 4Ds, VaynerMentors</option>
                                            <option value="Small to Midsize Business Offerings">Small to Midsize Business Offerings</option>
                                            <option value="Other VaynerMedia Services: VaynerTalent, VaynerExperience, Etc.">Other VaynerMedia Services: VaynerTalent, VaynerExperience, Etc.</option>
                                            <option value="Studio/Production">Studio/Production</option>
                                            <option value="Press &amp; Other Inquires">Press &amp; Other Inquires</option>
                                        </select>
                                    </div>
                                </li>
                                <li class="name gfield_label">
                                    <label for="name">Name *</label><br>
                                    <input type="email" name="Name" placeholder="Name"  id="name" required />
                                </li>
                                <li class="email gfield_label">
                                    <label for="email">Email *</label><br>
                                    <input type="email" name="email" placeholder="Email"  id="email" required />
                                </li>
                                <li class="company-name gfield_label">
                                    <label for="company_name">Company Name *</label><br>
                                    <input type="email" name="company_name" placeholder="Company Name"  id="company_name" required />
                                </li>
                                <li  class="wish gfield_label">
                                    <label for="input_2_20">What Can We Do For You?</label><br>
                                    <div class="ginput_container ginput_container_textarea">
                                        <textarea 
                                            name="input_20" 
                                            id="input_2_20" 
                                            class="textarea large" 
                                            aria-invalid="false" 
                                            rows="10" 
                                            cols="50">                                            
                                        </textarea>
                                    </div>
                                </li>
                                <!--  -->
                                <li id="field_2_37" class="addl-info ">
                                    <label class="gfield_label">
                                        <span class="gfield_required">*</span>
                                    </label>
                                    <div class="ginput_container ginput_container_checkbox">
                                        <ul class="gfield_checkbox" id="input_2_37">
                                            <li class="gchoice_2_37_1">
                                                <input name="input_37.1" 
                                                    type="checkbox" 
                                                    value="<p><span class='asterisk-red'>*</span> Yes, I'd also like to receive information about additional products or services that may be of interest to me. Information submitted through this form is subject to our <a href=&quot;/privacy-policy&quot;>Privacy Policy</a></p>" 
                                                    id="choice_2_37_1"
                                                >
                                                <label for="choice_2_37_1" id="label_2_37_1">
                                                    <p><span class="asterisk-red">*</span> Yes, I'd also like to receive information about additional products or services that may be of interest to me. Information submitted through this form is subject to our <a href="/privacy-policy">Privacy Policy</a></p>
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <!--  -->
                                <li class="links">
                                    <a href="https://dicemedia.bamboohr.com/jobs/" target="_blank">
                                        Dice Media Group Careers
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div class="gform_footer top_label">
                            <input  type="submit" 
                                    id="gform_submit_button_2" 
                                    class="gform_button button" 
                                    value="Submit" 
                                    >
                        </div>
                    </form>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

    .black {
        background-color: 
        black;
        color: white;
    }
    .color-teal {
        color: #66fcf1 !important;
    }

    .container {
    margin-right: auto;
    margin-left: auto;
    padding-left: 15px;
    padding-right: 15px;
    }
    #dmg-workwithus .gform_wrapper .top_label .gfield_label {
        font-family: "Unica One", Helvetica, Arial, sans-serif;
    }
    label {
        float: left;
        text-align: left;
        margin-right: 15px;
        text-transform: uppercase;
    }

    .gfield_label {
        font-family: "Unica One", Helvetica, Arial, sans-serif;
    }

    .top_label .gfield_label {
        display: -moz-inline-stack;
        display: inline-block;
        line-height: 1.3;
    }

    label.gfield_label {
        font-weight: 700;
        font-size: inherit;
    }

    .gform_heading {
        margin: 30px auto;
        font-family: "Unica One", serif;
        font-size: 48px;
    }
    
    #dmg-workwithus #field_2_38 label, #dmg-workwithus #field_2_20 label, #dmg-workwithus #field_2_42 label {
        text-transform: uppercase;
    }

    div.ginput_container {
        margin-top: 8px;
    }

    .gform_wrapper li {
        list-style: none !important;
    }
    .gform_wrapper label.gfield_label {
     font-weight:700;
     font-size:inherit
    }
    .select {
        cursor: pointer;
        display: inline-block;
        position: relative;
        color: #939090;
        border: 1px solid #ccc;
        border-radius: 4px;
        width: 100%;
        font-size: 12pt;
    }

    .form-control, #dmg-workwithus .ginput_container_text input, #dmg-workwithus .ginput_container_phone input, #dmg-workwithus .ginput_container_email input, #dmg-workwithus .ginput_container_select select, #dmg-workwithus .ginput_container_textarea textarea {
            display: block;
            width: 100%;
            height: 30pt;
            padding: 6px 12px;
            font-size: 12pt;
            line-height: 1.6;
            color: #939090;
            background-color: #fff;
            background-image: none;
            border: 1px solid#ccc;
            border-radius: 4px;
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
            transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
    }

    .gform_wrapper select option {
        padding: 2px;
        display: block;
    }

    #dmg-workwithus #gform_submit_button_2 {
        padding: 10px 10%;
        font-size: 12pt;
    }
    .btn, #dmg-workwithus #gform_submit_button_2 {
         cursor: pointer;
        margin: 0 0.25em;


        text-transform: uppercase;
        padding: 9px 25px 7px;
        border-radius: 30px;
        line-height: 1.3;
        font-family: "Unica One", Helvetica, Arial, sans-serif;
    }
    #gform_submit_button_2  {
        color: #66fcf1;
        border-color: #66fcf1;
        background-color: transparent;
        min-width: 100px;
        width: auto;
    }

    form > a {
        color: #66fcf1;
        text-decoration: none;
        display: inline;
        padding-bottom: 0.33em;
    }

    form > a:visited {
        text-decoration: none;
    }


    .gform_heading, .gform_footer {
        display: flex;
        justify-content: center;
        font-family: "Unica One", serif;
        font-size: 48px;
    }

    .interest { grid-area: interest; }
    .name { grid-area: name; }
    .email { grid-area: email; }
    .company-name { grid-area: company-name; }
    .wish { grid-area: wish; }
    .addl-info { grid-area: addl-info; }
    .links { grid-area: links; }

    @media only screen 
      and (min-device-width: 375px) 
      and (max-device-width: 667px) 
      and (-webkit-min-device-pixel-ratio: 2) { 
        .gform_fields {
            display: grid;
            grid-template-columns: repeat(2, 1fr); 
            grid-template-rows: auto;
            grid-template-areas: 
            "interest"
            "name"
            "email"
            "company-name"
            "wish "
            "addl-info" 
            "links";

        }
        .links {
            margin: 22px;
        }

    }

    @media screen 
      and (min-device-width: 1200px) 
      and (max-device-width: 1600px) 
      and (-webkit-min-device-pixel-ratio: 1) { 
        .gform_fields {
            display: grid;
            grid-template-columns: repeat(2, 1fr); 
            grid-template-rows: auto;
            grid-template-areas: 
            "interest interest"
            "name email"
            "company-name company-name"
            "wish wish"
            "addl-info links";

        }
    }

</style>