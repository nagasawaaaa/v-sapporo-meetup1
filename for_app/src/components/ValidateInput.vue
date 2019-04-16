<template>
  <div id="ValidateInput">
    <div>
      <p>
        <label for="mail">メール</label>
        <input
            id="mail"
            name="email"
            type="text"
            placeholder="example@co.jp"
            data-vv-as="メールアドレス"
            v-validate="'required|email'"
            @input="$emit('input-email', { value: $event.target.value, name: 'email' })"
        >
      </p>
      <p v-if="errors.first('email')">
        <span>{{ errors.first('email') }}</span>
      </p>
    </div>
    <div>
      <p>
        <label for="mail">電話番号</label>
        <input
            id="tel"
            name="tel"
            type="text"
            maxlength="11"
            placeholder="012-345-6789"
            data-vv-as="電話番号"
            v-validate="'required|tel'"
            @input="$emit('input-tel', { value: $event.target.value, name: 'tel' })"
        >
      </p>
      <p v-if="errors.first('tel')">
        <span>{{ errors.first('tel') }}</span>
      </p>
    </div>
    <div>
      <p>
        <label for="min_price">最低時給</label>
        <input
            id="min_price"
            name="min_price"
            type="number"
            placeholder="650"
            data-vv-as="最低時給"
            v-validate="'required|numeric|min_value:650'"
            @input="$emit('input-min-price', { value: $event.target.value, name: 'minPrice' })"
        > 円
      </p>
      <p v-if="errors.first('min_price')">
        {{ errors.first('min_price') }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ValidateInput',
  methods: {
    addValidatorTel () {
      this.$validator.extend('tel', {
        getMessage: (value) => value + 'の形式をご確認ください',
        validate: (value) => {
          // ハイフン的な文字列は削除
          let valNum = value.replace(/[ー|−|‐|-]/gu, '');
          return this.isPhoneNumber(valNum)
        }
      });
    },
    isPhoneNumber(number) {
      return /^\d{10,11}$/.test(number)
    }
  },
  created () {
    // バリデーションの追加
    this.addValidatorTel();
  }
}
</script>

<style scoped>
input[type='text'] {
  width: 300px;
  padding: 5px;
}
label {
  margin-right: 10px;
}
</style>
