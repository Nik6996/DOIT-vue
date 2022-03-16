<template>
  <div>
    <div class="prize">
      <div class="prize__column">
        <div class="prize__place">
          <span>Prize pool*: $</span
          ><input v-model="prizePool.prizeSum" type="number" />
        </div>
        <div class="prize__place3">
          <input
            v-model="prizePool.placeTurnOn3"
            class="prize__custom-radio"
            id="3place"
            type="checkbox"
          />
          <label for="3place">3rd place turn on?</label>
        </div>
        <div class="prize__place">
          <span>1st place: %</span>
          <input v-model="prizePool.stPlace1" type="number" />
        </div>
        <div class="prize__place">
          <span>2st place: %</span>
          <input v-model="prizePool.stPlace2" type="number" />
        </div>
        <div class="prize__place">
          <span>3st place: %</span>
          <input v-model="prizePool.stPlace3" type="number" />
        </div>
        <div class="prize__place">
          <span>4st place: %</span>
          <input v-model="prizePool.stPlace4" type="number" />
        </div>
        <div class="prize__type">
          <span>Type</span>
          <div>
            <input
              class="prize__custom-radio"
              type="checkbox"
              id="Money"
              value="Money"
              v-model="prizePool.typePrize"
            />
            <label for="Money">Money</label>
          </div>
          <div>
            <input
              class="prize__custom-radio"
              type="checkbox"
              id="Thing"
              value="Thing"
              v-model="prizePool.typePrize"
            />
            <label for="Thing">Thing</label>
          </div>
          <div>
            <input
              class="prize__custom-radio"
              type="checkbox"
              id="MoneyThing"
              value="MoneyThing"
              v-model="prizePool.typePrize"
            />
            <label for="MoneyThing">Money + Thing</label>
          </div>
          <div>
            <input
              class="prize__custom-radio"
              type="checkbox"
              id="Nothing"
              value="Nothing"
              v-model="prizePool.typePrize"
            />
            <label for="Nothing">Nothing</label>
          </div>
          <div>
            <input
              class="prize__custom-radio"
              type="checkbox"
              id="Qualifers"
              value="Qualifers"
              v-model="prizePool.typePrize"
            />
            <label for="Qualifers">Qualifers</label>
          </div>
        </div>
      </div>
      <div class="prize__column">
        <div class="prize__place-top">
          <span>MAX players*</span>
          <input v-model="prizePool.maxPlayers" type="number" />
        </div>
        <div class="prize__place">
          <span>Ro8</span>
          <input v-model="prizePool.ro8" type="number" />
        </div>
        <div class="prize__place">
          <span>Ro16</span>
          <input v-model="prizePool.ro16" type="number" />
        </div>
        <div class="prize__place">
          <span>Ro32</span>
          <input v-model="prizePool.ro32" type="number" />
        </div>
        <div class="prize__place">
          <span>Ro64</span>
          <input v-model="prizePool.ro64" type="number" />
        </div>
        <div class="prize__place">
          <span>Ro128</span>
          <input v-model="prizePool.ro128" type="number" />
        </div>
        <div class="prize__place">
          <span>Ro256</span>
          <input v-model="prizePool.ro256" type="number" />
        </div>
        <div class="prize__place">
          <span>Ro512</span>
          <input v-model="prizePool.ro512" type="number" />
        </div>
        <div class="prize__donations">
          <span>Donations</span>
          <div>
            <input
              class="prize__custom-radio"
              type="radio"
              id="Active"
              value="Active"
              v-model="prizePool.donations"
            />
            <label for="Active">Active</label>
          </div>
          <div>
            <input
              class="prize__custom-radio"
              type="radio"
              id="noActive"
              value="noActive"
              v-model="donations"
            />
            <label for="noActive">No Active</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      typePrize: [],
      donations: "",
    };
  },

  props: {
    prizePool: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
.prize {
  display: flex;
  padding: 10px;
  justify-content: space-around;
  flex-wrap: wrap;
  &__column {
    padding: 10px;
  }

  &__place {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 6px;
    input {
      margin-left: 6px;
      width: 119px;
      height: 25px;
      border: 2px solid #20252b;
      border-radius: 4px;
      background: #0f1215;
      padding-left: 5px;
      color: #cccdcd;
      font-weight: 700;
      text-align: center;
    }
  }

  &__place3 {
    margin: 10px 0px 20px 0px;
  }

  &__type,
  &__donations {
    span {
      display: block;
      margin: 20px 0px 10px 0px;
    }
    div {
      margin-bottom: 8px;
    }
  }

  &__custom-radio {
    position: absolute;
    z-index: -1;
    opacity: 0;
  }

  &__custom-radio + label {
    display: inline-flex;
    align-items: center;
    user-select: none;
  }
  &__custom-radio + label::before {
    content: "";
    width: 20px;
    height: 20px;
    border: 2px solid #20252b;
    border-radius: 50%;
    margin-right: 10px;
  }

  &__custom-radio:checked + label::before {
    background-repeat: no-repeat;
    background-position: center;
    background-image: url("../../../assets/icon/radioCheck.svg");
  }

  &__place-top {
    margin-bottom: 30px;
    input {
      margin-left: 6px;
      width: 119px;
      height: 25px;
      border: 2px solid #20252b;
      border-radius: 4px;
      background: #0f1215;
      padding-left: 5px;
      color: #cccdcd;
      font-weight: 700;
      text-align: center;
    }
  }
}
</style>