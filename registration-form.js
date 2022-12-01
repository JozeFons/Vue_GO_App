const RegistrationForm = {
    data() {
        return {
            SameAddressChecked: true,
        }
    },
    props: ["items"],
    template: `
        <h3>Registration</h3>
        <hr>
        <form autocomplete="off" class="needs-validation" novalidate>
            <text-input label="First Name" name="first-name" required="true" type="text"></text-input>
            <text-input label="Last Name" name="last-name" required="true" type="text"></text-input>
            <text-input label="Email" name="email" required="true" type="email"></text-input>
            <text-input label="Password" name="password" required="true" type="password"></text-input>
            <select-input label="Favourite Color" name="color" :items="items"></select-input>

            <text-input label="Address/Street" name="address" required="true" type="text"></text-input>
            <text-input label="City/Town" name="city" required="true" type="text"></text-input>
            <text-input label="Zip/Postal code" name="zip" required="true" type="text"></text-input>
            <text-input label="Country/State" name="country" required="true" type="text"></text-input>

            <check-input v-on:click="SameAddress" label="Mailing Address Same" checked="true" v-model="SameAddressChecked"></check-input>
            
            <div v-if="SameAddressChecked === false">
                <div class="mt-3">
                    <text-input label="Mailing Address/Street" name="address2" type="text"></text-input>
                    <text-input label="Mailing City/Town" name="city2" type="text"></text-input>
                    <text-input label="Mailing Zip/Postal code" name="zip2" type="text"></text-input>
                    <text-input label="Mailing Country/State" name="country2" type="text"></text-input>
                </div>
            </div>

            <check-input label="Agree to terms and conditions" required="true"></check-input>
            <hr>
            <input class="btn btn-outline-primary" type="submit" value="Register">
        </form>
    `,
    methods: {
        SameAddress() {
            console.log("Same address was selected");
            if (this.SameAddressChecked === true) {
                console.log("Address was checked on click");
                this.SameAddressChecked = false;
            }
            else  {
                console.log("Address was not checked on click")
                this.SameAddressChecked = true;
            }
        }
    },
    components: {
        'text-input': TextInput,
        'select-input': SelectInput,
        'check-input': CheckInput
    },
    mounted() {
        // Example starter JavaScript for disabling form submissions if there are invalid fields
        (() => {
            'use strict'
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            const forms = document.querySelectorAll('.needs-validation')
            // Loop over them and prevent submission
            Array.from(forms).forEach(form => {
                form.addEventListener('submit', event => {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }
                    form.classList.add('was-validated')
                }, false)
            })
        })()
    }
}