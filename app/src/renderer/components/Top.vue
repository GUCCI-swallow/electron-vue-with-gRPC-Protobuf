<template>
  <div>
    <button type="button" @click='clicked' name="button">gRPC+ProtoBuf</button>
  </div>
</template>

<script>
import grpc from 'grpc';
import qr from 'jsqrcode';

/* eslint-disable */
const PROTO = `${PROTO_PATH}hellostreamworld.proto`;
console.log(PROTO);
const hellostreamworld = grpc.load(PROTO).hellostreamworld;
/* eslint-disable */
const client = new hellostreamworld.MultiGreeter('localhost:50051', grpc.credentials.createInsecure());

export default {
  components: {},
  name: 'top',
  methods: {
    clicked(e) {
      e.preventDefault()
      const call = client.sayHello({
        name: 'gucc1',
        num_greetings: 'hey',
      });
      call.on('data', (feature) => {
        console.log(feature);
      });

      call.on('end', () => {
        console.log('end');
      });
    },
  },
};
</script>

<style scoped>
  img {
    margin-top: -25px;
    width: 450px;
  }
</style>
