<template>
  <div class="wrapper">
    <ul class="content">
      <li>lu1</li>
      <li>lu2</li>
      <li>lu3</li>
      <li>lu4</li>
      <li>lu5</li>
      <li>lu6</li>
      <li>lu7</li>
      <li>lu8</li>
      <li>lu9</li>
      <li>lu10</li>
      <li>lu11</li>
      <li>lu12</li>
      <li>lu13</li>
      <li>lu14</li>
      <li>lu15</li>
      <li>lu16</li>
      <li>lu17</li>
      <li>lu18</li>
      <li>lu19</li>
      <li>lu20</li>
      <li>lu21</li>
      <li>lu22</li>
      <li>lu23</li>
      <li>lu24</li>
      <li>lu25</li>
      <li>lu26</li>
      <li>lu27</li>
      <li>lu28</li>
      <li>lu29</li>
      <li>lu30</li>
      <li>lu31</li>
      <li>lu32</li>
      <li>lu33</li>
      <li>lu34</li>
      <li>lu35</li>
      <li>lu36</li>
      <li>lu37</li>
      <li>lu38</li>
      <li>lu39</li>
      <li>lu40</li>
      <li>lu41</li>
      <li>lu42</li>
      <li>lu43</li>
      <li>lu44</li>
      <li>lu45</li>
      <li>lu46</li>
      <li>lu47</li>
      <li>lu48</li>
      <li>lu49</li>
      <li>lu50</li>
      <li>lu51</li>
      <li>lu52</li>
      <li>lu53</li>
      <li>lu54</li>
      <li>lu55</li>
      <li>lu56</li>
      <li>lu57</li>
      <li>lu58</li>
      <li>lu59</li>
      <li>lu60</li>
      <li>lu61</li>
      <li>lu62</li>
      <li>lu63</li>
      <li>lu64</li>
      <li>lu65</li>
      <li>lu66</li>
      <li>lu67</li>
      <li>lu68</li>
      <li>lu69</li>
      <li>lu70</li>
      <li>lu71</li>
      <li>lu72</li>
      <li>lu73</li>
      <li>lu74</li>
      <li>lu75</li>
      <li>lu76</li>
      <li>lu77</li>
      <li>lu78</li>
      <li>lu79</li>
      <li>lu80</li>
      <li>lu81</li>
      <li>lu82</li>
      <li>lu83</li>
      <li>lu84</li>
      <li>lu85</li>
      <li>lu86</li>
      <li>lu87</li>
      <li>lu88</li>
      <li>lu89</li>
      <li>lu90</li>
      <li>lu91</li>
      <li>lu92</li>
      <li>lu93</li>
      <li>lu94</li>
      <li>lu95</li>
      <li>lu96</li>
      <li>lu97</li>
      <li>lu98</li>
      <li>lu99</li>
      <li>lu100</li>
    </ul>
  </div>
</template>
 
<script>
 import BScorll from 'better-scroll'

export default {
  data() {
    return {
     scroll: null
    }
  },
    mounted() {
       this.scroll = new BScorll('.wrapper',{
        probeType:3,
        pullUpLoad: true
      })
      this.scroll.on('scroll',(position) => {
        console.log(position);
        
      })
      this.scroll.on('pullingUp', () => {
        console.log('上拉加载更多');
        
      })
    },
    methods: {}
  }
</script>

<style scoped>
  .wrapper {
    height: 300px;
    background-color: #555555;
    overflow: hidden;
    /* overflow-y: scroll;         超出部分自动隐藏，y轴上可滚动，包括overflow：hidden  */
  }
</style>